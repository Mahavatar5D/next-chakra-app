import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer style={{ textAlign: 'center' }}>
      <p>
        &copy; Quiz {new Date().getFullYear()}
      </p>
    </footer>
  )
}

export default Footer
