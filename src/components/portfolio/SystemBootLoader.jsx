import { useState, useEffect } from 'react';

const SystemBootLoader = ({ onBootComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const bootSequence = [
    { text: "Loading kernel...", duration: 500 },
    { text: "Initializing developer profile...", duration: 500 },
    { text: "Loading portfolio modules...", duration: 500 }
  ];

  useEffect(() => {
    if (currentStep < bootSequence.length) {
      const timer = setTimeout(() => {
        setCurrentStep(currentStep + 1);
      }, bootSequence[currentStep].duration);

      return () => clearTimeout(timer);
    } else {
      // Boot sequence complete
      let onBootCompleteTimer;
      const finalTimer = setTimeout(() => {
        setIsComplete(true);
        onBootCompleteTimer = setTimeout(() => {
          onBootComplete();
        }, 1000);
      }, 500);

      return () => {
        clearTimeout(finalTimer);
        if (onBootCompleteTimer) clearTimeout(onBootCompleteTimer);
      };
    }
  }, [currentStep, onBootComplete]);

  const getProgressBar = () => "████████";
  const getPercentage = () => "100%";

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "black",
        color: "#f02eaa",
        fontFamily: "monospace",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 32px"
      }}
    >
      <div style={{ width: "100%", maxWidth: "640px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <div
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              marginBottom: "24px",
              color: "#f02eaa" // vscode-magenta
            }}
          >
            [ SYSTEM BOOTING... ]
          </div>
        </div>

        {/* Boot Steps */}
        <div style={{ marginBottom: "32px" }}>
          {bootSequence.map((step, index) => (
            <div
              key={index}
              style={{
                opacity: index <= currentStep ? 1 : 0.3,
                transition: "opacity 0.5s",
                marginBottom: "16px"
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between"
                }}
              >
                <span style={{ color: "#d4d4d4" }}>{step.text}</span>
                <span style={{ color: "#f02eaa", marginLeft: "16px" }}>
                  {getProgressBar(index)} {getPercentage(index)}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Final Info */}
        {currentStep >= bootSequence.length && (
          <div
            style={{
              borderTop: "1px solid rgba(236,72,153,0.3)",
              paddingTop: "24px",
              animation: "fadeIn 0.5s ease-in"
            }}
          >
            <div style={{ color: "#f02eaa", marginBottom: "8px" }}>
              &gt;&gt; Developer Online:{" "}
              <span style={{ color: "white", fontWeight: "bold" }}>
                Ritisa Behera
              </span>
            </div>
            <div style={{ color: "#f02eaa", marginBottom: "8px" }}>
              &gt;&gt; Current Role:{" "}
              <span style={{ color: "white" }}>Final-Year IT Student</span>
            </div>
            <div style={{ color: "#f02eaa", marginBottom: "8px" }}>
              &gt;&gt; Seeking:{" "}
              <span style={{ color: "white" }}>
                Full-Time Software Engineer Role (Graduating 2026)
              </span>
            </div>
            <div style={{ color: "#f02eaa" }}>
              &gt;&gt; Status:{" "}
              <span style={{ color: "white" }}>
                Ready to build, scale, and innovate
              </span>{" "}
              🚀
            </div>
          </div>
        )}

        {/* Completion Prompt */}
        {isComplete && (
          <div style={{ textAlign: "center", marginTop: "32px" }}>
            <div
              style={{
                color: "#d4d4d4",
                animation: "pulse 1.5s infinite"
              }}
            >
              Press any key to continue...
            </div>
          </div>
        )}
      </div>

      {/* Inline keyframes */}
      <style>
        {`
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
          }
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
        `}
      </style>
    </div>
  );
};

export default SystemBootLoader;
