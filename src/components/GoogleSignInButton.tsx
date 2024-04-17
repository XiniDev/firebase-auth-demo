import React, { useEffect } from 'react';

declare global {
    interface Window {
        google: any;
    }
}

interface GoogleSignInButtonProps {
    onClick: () => void;
}

const GoogleSignInButton: React.FC<GoogleSignInButtonProps> = ({ onClick }): JSX.Element => {
    useEffect(() => {
        const handleCredentialResponse = (response: { credential: string }) => {
            console.log("Encoded JWT ID token: " + response.credential);
        };

        const initializeGoogleSignIn = () => {
            const script = document.createElement('script');
            script.src = 'https://accounts.google.com/gsi/client';
            script.async = true;
            script.onload = () => {
                window.google.accounts.id.initialize({
                    client_id: "363383635962-tb8c2sa0h0l8vcdouc3p40fi10odm81j.apps.googleusercontent.com",
                    callback: handleCredentialResponse
                });
                window.google.accounts.id.renderButton(
                    document.getElementById("buttonDiv"),
                    { theme: "outline", size: "large" }  // customization attributes
                );
                window.google.accounts.id.prompt(); // also display the One Tap dialog
            };
            document.body.appendChild(script);
        };
    
        initializeGoogleSignIn();
    
        return () => {
            // Cleanup if necessary
        };
    }, []);
  
    return (
        <div id="buttonDiv" onClick={onClick}></div>
    );
};

export default GoogleSignInButton;