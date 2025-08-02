import { X, ExternalLink } from 'lucide-react';

export const GemModal = ({ gem, onClose }) => {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 20,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem",
      }}
    >
      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0.4)", // black/40
        }}
        onClick={onClose}
      />

      {/* Modal */}
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "28rem", // max-w-md
          backgroundColor: "rgba(0, 0, 0, 0.8)", // dark background
          color: "#f8f8f2", // light grey text
          borderRadius: "1rem", // rounded-2xl
          boxShadow: "0 10px 15px rgba(0,0,0,0.1), 0 4px 6px rgba(0,0,0,0.1)", // shadow-xl
          padding: "1.5rem",
          animation: "fadeScale 0.3s ease", // You need to define keyframes separately
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
            padding: "0.25rem",
            borderRadius: "9999px",
            backgroundColor: "transparent",
            cursor: "pointer",
            color: "#f02eaa",
            boxShadow: `0 0 12px rgba(255, 0, 150, 0.5), 0 0 24px rgba(255, 0, 150, 0.2)`,
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "#fffff")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "transparent")
          }
        >
          <X size={20} />
        </button>

        {/* Gem Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            marginBottom: "1rem",
          }}
        >
          <div
            style={{
              width: "4rem",
              height: "4rem",
              borderRadius: "0.5rem",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              backgroundColor:
                gem.type === "skill"
                  ? "rgb(255, 0, 255)"
                  : gem.type === "project"
                  ? "rgb(255, 0, 100)"
                  : "rgb(150, 0, 255)", 
              clipPath:
                "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
              flexShrink: 0,
            }}
          />
          <div>
            <h3 style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#f02eaa" }}>
              {gem.title}
            </h3>
            <p
              style={{
                fontSize: "0.875rem",
                color: "#6b7280", // gray-500
                textTransform: "capitalize",
              }}
            >
              {gem.type} • {new Date(gem.date).toLocaleDateString()}
            </p>
          </div>
        </div>

        {/* Description */}
        <p style={{ color: "#f8f8f2", marginBottom: "1.5rem" }}>{gem.description}</p>

        {/* Links */}
        {gem.links && gem.links.length > 0 && (
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <h4
              style={{
                fontWeight: "500",
                fontSize: "0.875rem",
                color: "#f8f8f2",
              }}
            >
              Links
            </h4>
            {gem.links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  color: "#f02eaa",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255, 0, 150, 0.9)")} // blue-800
                onMouseLeave={(e) => (e.currentTarget.style.color = "#f02eaa")}
              >
                <ExternalLink size={16} />
                <span>{link.label}</span>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );

};  
