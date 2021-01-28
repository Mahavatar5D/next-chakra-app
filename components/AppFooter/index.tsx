import React from 'react'

const AppFooter: React.FC = () => {
  return (
    <footer style={{ textAlign: 'center' }}>
      <p>
        &copy; Quiz {new Date().getFullYear()}
      </p>
    </footer>
  )
}

export default AppFooter
