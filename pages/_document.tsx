import React from 'react'
import NextDocument from 'next/document'
import MasterPage from '../components/MasterPage'

class AppDocument extends NextDocument {
  render () {
    return (
      <MasterPage />
    )
  }
}

export default AppDocument
