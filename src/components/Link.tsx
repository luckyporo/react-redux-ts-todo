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
    className={'p-1 mx-4 rounded ' + (active ? 'border border-blue-500' : '')}>
    {children}
  </button>
)

export default Link
