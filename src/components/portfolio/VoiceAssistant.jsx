import { useState, useEffect } from 'react'
import { Mic, MicOff } from 'lucide-react'
import { useToast } from '../../hooks/use-toast'

const VoiceAssistant = ({ onNavigate }) => {
  const [isListening, setIsListening] = useState(false)
  const [recognition, setRecognition] = useState(null)
  const { toast } = useToast()

  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)
    ) {
      const SpeechRecognitionConstructor =
        window.SpeechRecognition || window.webkitSpeechRecognition

      if (SpeechRecognitionConstructor) {
        const recognitionInstance = new SpeechRecognitionConstructor()

        recognitionInstance.continuous = false
        recognitionInstance.interimResults = false
        recognitionInstance.lang = 'en-US'

        recognitionInstance.onresult = (event) => {
          const command = event.results[0][0].transcript.toLowerCase()
          console.log('Voice command:', command)

          if (command.includes('home') || command.includes('hero')) {
            onNavigate('hero')
            toast({ title: 'Navigating to Hero section' })
          } else if (command.includes('project')) {
            onNavigate('projects')
            toast({ title: 'Navigating to Projects section' })
          } else if (command.includes('about')) {
            onNavigate('about')
            toast({ title: 'Navigating to About section' })
          } else if (command.includes('experience') || command.includes('work')) {
            onNavigate('experience')
            toast({ title: 'Navigating to Experience section' })
          } else {
            toast({
              title: 'Command not recognized',
              description: 'Try: "Go to projects", "Go to about", "Go to experience"'
            })
          }

          setIsListening(false)
        }

        recognitionInstance.onerror = () => {
          setIsListening(false)
          toast({
            title: 'Voice recognition error',
            description: 'Please try again'
          })
        }

        recognitionInstance.onend = () => {
          setIsListening(false)
        }

        setRecognition(recognitionInstance)
      }
    }
  }, [onNavigate, toast])

  const toggleListening = () => {
    if (!recognition) {
      toast({
        title: 'Voice recognition not supported',
        description: 'Your browser does not support voice commands'
      })
      return
    }

    if (isListening) {
      recognition.stop()
      setIsListening(false)
    } else {
      recognition.start()
      setIsListening(true)
      toast({
        title: 'Listening...',
        description: 'Say a command like "Go to projects"'
      })
    }
  }

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '1.5rem',
        right: '1.5rem',
        zIndex: 50
      }}
    >
      <button
        onClick={toggleListening}
        aria-label="Voice Assistant"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.5rem',
          width: '3.5rem',
          height: '3.5rem',
          borderRadius: '9999px',
          padding: 0,
          fontSize: '0.875rem',
          fontWeight: 500,
          color: isListening ? '#f02eaa' : 'rgba(240, 200, 225, 0.75)',
          backgroundColor: isListening ? '#1e1e1e' : '#f02eaa',
          boxShadow: '0 0 12px rgba(255, 0, 149, 0.5)',
          border: isListening ? 'none' : '1px solid rgba(255, 0, 150, 0.5)',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          userSelect: 'none',
          outlineOffset: '2px',
          animation: isListening ? 'glow 1.5s infinite alternate' : 'none'
        }}
        onFocus={(e) => e.currentTarget.style.outline = '2px solid rgba(255, 0, 150, 0.7)'}
        onBlur={(e) => e.currentTarget.style.outline = 'none'}
      >
        {isListening ? (
          <MicOff style={{ width: '1.5rem', height: '1.5rem' }} />
        ) : (
          <Mic style={{ width: '1.5rem', height: '1.5rem' }} />
        )}
      </button>

      {isListening && (
        <div
          style={{
            position: 'absolute',
            bottom: '4rem',
            right: 0,
            marginBottom: '0.5rem',
            padding: '0.25rem 0.75rem',
            backgroundColor: '#1e1e1e',
            border: '1px solid #3c3c3c',
            borderRadius: '0.5rem',
            fontSize: '0.75rem',
            color: '#d4d4d4',
            whiteSpace: 'nowrap'
          }}
        >
          Listening for commands...
        </div>
      )}

      <style>{`
        @keyframes glow {
          0% { box-shadow: 0 0 5px #f02eaa; }
          100% { box-shadow: 0 0 20px #f02eaa; }
        }
        button:focus-visible {
          outline: 2px solid #f02eaa;
          outline-offset: 2px;
        }
      `}</style>
    </div>
  )
}

export default VoiceAssistant
