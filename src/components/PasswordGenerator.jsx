import React, { useState, useCallback, useEffect, useRef } from 'react';

function PasswordGenerator() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*~";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numAllowed, charAllowed]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numAllowed, charAllowed, passwordGenerator]);

  return (
    <div id='password-generator' className='card mx-auto mt-16'>
      <div className='card-info p-6'>
        <div className='w-full'>
          <div className='flex items-center mb-4'>
            <input
              type="text"
              value={password}
              className='w-full py-2 px-4 bg-gray-800 text-gray-300 rounded-l-lg focus:outline-none'
              placeholder='Generated Password'
              readOnly
              ref={passwordRef}
            />
            <button
              onClick={copyPasswordToClipboard}
              className='bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-500 transition duration-300'
            >
              Copy
            </button>
          </div>
          <div className='flex flex-col gap-y-4'>
            <div className='flex items-center justify-between'>
              <label className='text-sm'>Length: {length}</label>
              <input
                type='range'
                min={6}
                max={100}
                value={length}
                className='w-full ml-4'
                onChange={(e) => setLength(e.target.value)}
              />
            </div>
            <div className='flex items-center justify-between'>
              <label className='text-sm'>Include Numbers</label>
              <input
                type='checkbox'
                checked={numAllowed}
                onChange={() => setNumAllowed(prev => !prev)}
                className='h-4 w-4 text-blue-600 bg-gray-800 rounded border-gray-700 focus:ring-blue-500'
              />
            </div>
            <div className='flex items-center justify-between'>
              <label className='text-sm'>Include Special Characters</label>
              <input
                type='checkbox'
                checked={charAllowed}
                onChange={() => setCharAllowed(prev => !prev)}
                className='h-4 w-4 text-blue-600 bg-gray-800 rounded border-gray-700 focus:ring-blue-500'
              />
            </div>
          </div>
        </div>
      </div>      
    </div>
  );
}

export default PasswordGenerator;
