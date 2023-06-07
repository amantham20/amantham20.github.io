import React from 'react'
import { useState } from 'react'
import './Tabs.css'

const Tabs = ({children, disabled=false, setInitial=0}) => {
  const [activeTab, setActiveTab] = useState(children[setInitial].props.label);

  const handleClick = (e, newActiveTab) =>{
    e.preventDefault();
    setActiveTab(newActiveTab);
  }

  if (disabled) {
    return null
  }

  return (
    <div>
      <ul className='tabBar'>
        {children.map((tabs) => (<a href="#" onClick={function(e) {handleClick(e, tabs.props.label)}} className={tabs.props.label === activeTab ? "btn-primary btn" : "btn"} key={tabs.props.label}>{tabs.props.label}</a>))}
      </ul>
      <div>
        {children.map((one) => {
          if (one.props.label === activeTab) {
            return(
              <div className='tbcontent' key={one.props.children}>{one.props.children}</div>
            )
            }
          })}
      </div>
    </div>
  )
}

export default Tabs