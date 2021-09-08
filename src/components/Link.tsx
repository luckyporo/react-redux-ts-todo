import React from 'react'

type Props = {
  active: boolean
  children: React.ReactNode
  onClick: () => void
}

const Link = ({ active, children, onClick }: Props) => (
  <button
    onClick={onClick}
    disabled={active}
    style={{
      marginLeft: '4px',
    }}>
    {children}
  </button>
)

export default Link
