import { Globe, LinkIcon, Mail, Users, Trophy, Clock3, Zap, Github, Phone } from 'lucide-react';

const formatCompactNumber = (value) => {
  if (value == null || Number.isNaN(value)) return '—';
  if (value < 1000) return value.toString();
  return Intl.NumberFormat('en', { notation: 'compact', maximumFractionDigits: 1 }).format(value);
};

const buildContactChannels = ({ githubProfile, leetcodeStats }) => {
  const contributions =
    githubProfile?.totalContributions ??
    githubProfile?.contributions?.total ??
    githubProfile?.contributionsCollection?.totalCommitContributions ??
    githubProfile?.contributionCount ??
    null;

  const channels = [
    {
      id: 'email',
      icon: Mail,
      label: 'Email',
      href: 'mailto:ritisarabindra@gmail.com',
      primary: 'ritisarabindra@gmail.com',
      secondary: 'Contact for opportunities',
    },
    {
      id: 'phone',
      icon: Phone,
      label: 'Phone',
      href: 'tel:+918104794060',
      primary: '+91 81047 94060',
      secondary: 'Available 9 AM - 6 PM',
    },
    {
      id: 'linkedin',
      icon: Users,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/ritisa-behera',
      primary: 'Ritisa Behera',
      secondary: 'Professional network',
    },
    {
      id: 'github',
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/itisar-345',
      primary: `@${githubProfile?.username || 'itisar-345'}`,
      secondary: `${formatCompactNumber(contributions)} contributions`,
    }
  ];

  if (leetcodeStats) {
    channels.push({
      id: 'leetcode',
      icon: Trophy,
      label: 'LeetCode',
      href: 'https://leetcode.com/ritisa-345/',
      primary: `ritisa-345`,
      secondary: `Global rank ${leetcodeStats.globalRank || '—'}`,
    });
  }

  return channels;
};

const ContactTab = ({ github, leetcode, statsStatus }) => {
  const contactChannels = buildContactChannels({ githubProfile: github, leetcodeStats: leetcode });
  return (
    <section className="contact-hub" role="tabpanel" id="contact-panel">
      <div className="contact-hero">
        <div className="contact-header">
          <div className="contact-title-group">
            <h2 className="contact-title">Let's Connect</h2>
            <p className="contact-subtitle">Ready to collaborate? Reach out through any channel below</p>
          </div>
          <div className="status-indicator">
            <div className="status-dot active"></div>
            <span>Available for opportunities</span>
          </div>
        </div>
      </div>

      <div className="contact-channels">
        {contactChannels.length === 0 && statsStatus !== 'loading' && (
          <div className="empty-state">
            <Mail size={48} />
            <p>Connect your profiles to display contact channels</p>
          </div>
        )}
        {statsStatus === 'loading' && contactChannels.length === 0 && (
          <div className="loading-grid">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="contact-card-skeleton" />
            ))}
          </div>
        )}
        {contactChannels.map((channel, index) => {
          const Icon = channel.icon;
          return (
            <div key={channel.id} className="contact-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <a href={channel.href} target="_blank" rel="noreferrer" className="contact-link">
                <div className="contact-icon">
                  <Icon size={24} />
                </div>
                <div className="contact-info">
                  <h3>{channel.label}</h3>
                  <p className="contact-handle">{channel.primary}</p>
                  {channel.secondary && <span className="contact-meta">{channel.secondary}</span>}
                </div>
                <div className="contact-arrow">
                  <LinkIcon size={16} />
                </div>
              </a>
            </div>
          );
        })}
      </div>

      <div className="contact-footer">
        <p className="contact-note">
          <Globe size={14} />
          All profiles are live-synced and updated in real-time
        </p>
      </div>
    </section>
  );
};

export default ContactTab;