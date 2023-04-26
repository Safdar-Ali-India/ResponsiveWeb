import React from 'react';
// import './styles.css'; // Import your CSS file
// import img from '../../public/titleimage@2x.png'

function BackGroundImg() {
    const styles = {
        backgroundImage: 'url("../../public/titleimage@2x.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
      };
    
      return (
        <div style={styles}>
          {/* Your content goes here */}
        </div>
      );
    }


export default BackGroundImg
