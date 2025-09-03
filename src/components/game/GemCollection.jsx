import { useState } from 'react';
import { X, Filter, SortAsc } from 'lucide-react';
import { useGame } from '../../context/GameContext';
import { allGems } from '../../data/gems';

const GemCollection = ({ onSelectGem }) => {
  const { gameState, toggleCollection } = useGame();
  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState('date-desc');

  const collectedGems = allGems.filter(gem =>
    gameState.collectedGems.includes(gem.id)
  );

  const filteredGems = filter === 'all'
    ? collectedGems
    : collectedGems.filter(gem => gem.type === filter);

  const sortedGems = [...filteredGems].sort((a, b) => {
    if (sortBy === 'date-desc') {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    } else if (sortBy === 'date-asc') {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    }
    return 0;
  });


  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        backdropFilter: "blur(8px)",
        zIndex: 10,
        overflowY: "auto",
        overflowX: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: "64rem",
          marginLeft: "auto",
          marginRight: "auto",
          padding: "1rem",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "1.5rem",
          }}
        >
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: "700",
              margin: 0,
              color: "#f8f8f2",
            }}
          >
            Gem Collection
          </h2>
          <button
            onClick={() => toggleCollection()}
            style={{
              padding: "0.5rem",
              borderRadius: "9999px",
              backgroundColor: "#f02eaa",
              border: "none",
              cursor: "pointer",
              transition: "background-color 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#ff66cc")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#f02eaa")}
            aria-label="Close gem collection"
          >
            <X size={24} color="#1e1e1e" />
          </button>
        </div>

        {/* Filters and sorting */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            marginBottom: "1.5rem",
          }}
        >
          {/* Filter */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              backgroundColor: "#1e1e1e",
              color: "#f8f8f2",
              padding: "0.5rem",
              borderRadius: "0.5rem",
              border: "1px solid #f02eaa",
            }}
          >
            <Filter size={18} style={{ color: "#f02eaa" }} />
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              style={{
                backgroundColor: "#1e1e1e",
                border: "1px solid #f02eaa",
                borderRadius: "0.375rem",
                padding: "0.25rem 0.75rem", 
                color: "#f8f8f2", 
                fontSize: "1rem",
                appearance: "none",
                cursor: "pointer",
                WebkitAppearance: "none",
                MozAppearance: "none",
              }}
            >
              <option value="all">All Types</option>
              <option value="skill">Skills</option>
              <option value="experience">Experience</option>
              <option value="project">Projects</option>
              <option value="achievement">Achievements</option>
            </select>
          </div>

          {/* Sort */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              backgroundColor: "#1e1e1e",
              color: "#f8f8f2",
              padding: "0.5rem",
              borderRadius: "0.5rem",
              border: "1px solid #f02eaa",
            }}
          >
            <SortAsc size={18} style={{ color: "#f02eaa" }} />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              style={{
                backgroundColor: "#1e1e1e",
                border: "1px solid #f02eaa",
                borderRadius: "0.375rem",
                padding: "0.25rem 0.75rem", 
                color: "#f8f8f2", 
                fontSize: "1rem",
                appearance: "none",
                cursor: "pointer",
                WebkitAppearance: "none",
                MozAppearance: "none",
              }}
            >
              <option value="date-desc">Date (Newest First)</option>
              <option value="date-asc">Date (Oldest First)</option>
            </select>
          </div>
        </div>

        {/* Gems grid or empty state */}
        {sortedGems.length === 0 ? (
          <div
            style={{
              textAlign: "center",
              paddingTop: "3rem",
              paddingBottom: "3rem",
              color: "#f8f8f2",
            }}
          >
            <p style={{ fontSize: "1.125rem", margin: 0 }}>No gems collected yet!</p>
            <p style={{ marginTop: "0.5rem" }}>Explore the world to find gems.</p>
          </div>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(1, minmax(0, 1fr))",
              gap: "1rem",
            }}
          >
            {sortedGems.map((gem) => (
              <div
                key={gem.id}
                onClick={() => onSelectGem(gem)}
                style={{
                  backgroundColor: "#1e1e1e",
                  color: "#f8f8f2",
                  borderRadius: "0.5rem",
                  boxShadow: "0 0 8px rgba(255, 0, 150, 0.3)",
                  padding: "1rem",
                  cursor: "pointer",
                  transition: "box-shadow 0.2s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.boxShadow = "0 0 16px rgba(255, 0, 150, 0.6)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.boxShadow = "0 0 8px rgba(255, 0, 150, 0.3)")
                }
              >
                <div
                  style={{
                    display: "flex",
                    gap: "0.75rem",
                  }}
                >
                  <div
                    style={{
                      width: "3rem",
                      height: "3rem",
                      borderRadius: "0.5rem",
                      boxShadow: "0 0 6px rgba(255, 0, 150, 0.6)",
                      flexShrink: 0,
                      backgroundColor:
                        gem.type === "skill"
                          ? "rgb(255, 0, 255)"
                          : gem.type === "project"
                          ? "rgb(255, 0, 100)"
                          : gem.type === "experience"
                          ? "rgb(200, 255, 0)"
                          : "rgb(150, 0, 255)",
                      clipPath:
                        "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                    }}
                  />
                  <div>
                    <h3
                      style={{
                        fontWeight: 500,
                        margin: 0,
                        fontSize: "1rem",
                      }}
                    >
                      {gem.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "0.875rem",
                        color: "#f8f8f2",
                        textTransform: "capitalize",
                        margin: 0,
                      }}
                    >
                      {gem.type}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default GemCollection;
