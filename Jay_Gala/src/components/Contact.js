import React from 'react'

const Contact = (props) => {
    const { details, icon, link } = props.contact;
  return (
    <div className="col-md-4 col-sm-12 text-center title_content">
      { link ? (
          <p><i className={icon} style={{ color: '#f16051'}}></i> <a href={link} > {details}</a></p>
      ) : <p><i className={icon} style={{ color: '#f16051'}}></i> {details}</p> }
    </div>
  )
}

export default Contact
