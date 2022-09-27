import { Link, NavLink, Routes, Route, useNavigate } from 'react-router-dom';
import React from 'react'
import '@coreui/coreui/dist/css/coreui.min.css'
import {
  CContainer, CCard,
  CCardHeader, CNav, CNavItem, CCardBody,

} from '@coreui/react';
import RegisterComponent from './components/RegisterComponent';
import LoginComponent from './components/LoginComponent';
import Image1 from "./assets/image1.jpg"
import { useEffect } from 'react';

export default function App() {
  const navigate = useNavigate()
  useEffect(() => {
    navigate("/register")
  }, [])
  return (
    <CContainer fluid className='py-5 px-5' style={{
      background: `linear-gradient( rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.7)), url(${Image1})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: `center top`,
      backgroundSize: 'cover',
      backdropFilter: 'blur(5px)',
      backgroundColor: 'rgba(0,0,0,1)',
      minHeight: "1200px"
    }}>
      <CCard className="text-center" style={{
        maxWidth: "800px"
      }}>
        <CCardHeader>
          <CNav variant="tabs" className="card-header-tabs">
            <CNavItem>
              <NavLink to="/register" className="nav-link">
                Register
              </NavLink>
            </CNavItem>
            <CNavItem>
              <NavLink to="/login" className={"nav-link"}>
                Login
              </NavLink>
            </CNavItem>
          </CNav>
        </CCardHeader>
        <CCardBody className='py-5'>
          <Routes>
            <Route path="/register" element={<RegisterComponent />}
            />
            <Route path="/login" element={<LoginComponent />} />
          </Routes>
        </CCardBody>
      </CCard>
    </CContainer>
  )
}
