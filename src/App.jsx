// App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import PasswordGenerator from './components/PasswordGenerator';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <PasswordGenerator />
      <div id="about">
        <h2 className="text-xl font-bold mb-4">Why Strong Passwords Are Necessary</h2>
        <p className="mb-2">
          Strong passwords are essential for several reasons, including protection against unauthorized access, defense against brute force attacks, and preventing identity theft. They also help safeguard multiple accounts, protect financial assets, and prevent the spread of malware.
        </p><br></br>
        <h2 className="text-xl font-bold mb-4">Good Practices for Creating Strong Passwords</h2>
        <ul className="list-disc list-inside">
          <li>Use a mix of uppercase and lowercase letters, numbers, and special characters.</li>
          <li>Ensure your passwords are at least 12-16 characters long.</li>
          <li>Avoid common words, phrases, and personal information.</li>
          <li>Use passphrases combining multiple unrelated words.</li>
          <li>Change passwords regularly and avoid reusing them across different sites.</li>
          <li>Enable two-factor authentication (2FA) wherever possible.</li>
          <li>Consider using a password manager to generate and store strong, unique passwords.</li>
          <li>Avoid sequential patterns and randomize your passwords.</li>
          <li>Monitor for breaches and change your passwords immediately if necessary.</li>
          <li>Don’t share your passwords and stay informed about the latest security trends.</li>
          <li>It's recommended to change your passwords every 10 weeks.</li>
          <li>Encrypt and backup your passwords to different locations, then if you lost access to your computer or account, you can retrieve your passwords back quickly.</li>
          <li>Protect your computer with firewall and antivirus software, block all incoming connections and all unnecessary outgoing connections with the firewall. Download software from reputable sites only, and verify the MD5 / SHA1 / SHA256 checksum or GPG signature of the installation package whenever possible.</li>
          <li>If there are WIFI routers in your home, then it's possible to know the passwords you typed( in your neighbor's house ) by detecting the gestures of your fingers and hands, since the WIFI signal they received will change when you move your fingers and hands. You can use an on-screen keyboard to type your passwords in such cases, it would be more secure if this virtual keyboard( or soft keyboard ) changes layouts every time.</li>
          <li>Lock your computer and mobile phone when you leave them.</li>
          <li>Encrypt the entire hard drive with VeraCrypt, FileVault, LUKS or similar tools before putting important files on it, and destroy the hard drive of your old devices physically if it's necessary</li>
          <li>Access important websites in private or incognito mode, or use one Web browser to access important websites, use another one to access other sites. Or access unimportant websites and install new software inside a virtual machine created with VMware, VirtualBox or Parallels.</li>
          <li> Do not click the link in an email or SMS message, do not reset your passwords by clicking them, except that you know these messages are not fake.</li>
        </ul>
      </div>
      <Footer />
    </div>
  );
}

export default App;
