import React from 'react'
import { FooterRouteLinks } from '../../routes/RouteLinks'
import { Link } from "react-router-dom";

const footer = () => {
  const footerdata = [
   {
    title: 'Help',
    path:FooterRouteLinks.help,
   },
   {
    title: 'Terms and Condition',
    path:FooterRouteLinks.termsAndConditions,
   },
   {
    title: 'Privacy',
    path:FooterRouteLinks.privacy,
   },
   {
    title: 'Contact Us',
    path:FooterRouteLinks.contactUs,
   }
  ]
  return (
    <div className=''>
      <ul className='footer-links d-lg-flex  d-md-flex d-sm-flex-column justify-content-center'>
      {footerdata.map((item, index) => {
              return (
                <li className='footer-item py-3' key={index}>
                  <Link to={item.path} className='nav-link' key={index}>
                    {item.title}
                  </Link>
                </li>
              );
            })}
      </ul>
    </div>
  )
}

export default footer
