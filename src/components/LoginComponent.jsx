import React, { useRef } from 'react'
import {
    CContainer, CButton,
    CCardTitle, CForm, CFormInput, CRow, CCol,
    CFormCheck,
} from '@coreui/react';
import { Link } from 'react-router-dom';

export default function LoginComponent() {
    const formRef = useRef()
    return (
        <>
            <CCardTitle className='fw-bold mb-3'>Enter your credentials to Login</CCardTitle>
            <CForm className='text-start px-4 gy-3' onSubmit={(e) => {
                e.preventDefault()
                const iv = formRef.current
                const v = {
                    email: iv.email.value,
                    password: iv.password.value
                }
                console.log(v)
                const l = JSON.parse(localStorage.getItem("users"))
                // Condition to check if user is there or not
            }} ref={formRef}
            >
                <CRow className='mb-3'>
                    <CCol>
                        <CFormInput label='Enter your Email Address' type='email' placeholder='Email Address' name='email' />
                    </CCol>
                </CRow>
                <CRow className='mb-3'>
                    <CCol>
                        <CFormInput label='Enter your Password' type='password' placeholder='Password' name='password' />
                    </CCol>
                </CRow>
                <CRow className='mb-3'>
                    <CCol>
                        <CFormCheck defaultChecked label='Keep me signed In' />
                    </CCol>
                </CRow>
                <CRow className='mb-3'>
                    <CCol>
                        <CButton type='submit' color='success'>Log In</CButton>
                    </CCol>
                </CRow>
            </CForm>
            <CContainer className="text-center">
                <Link to="/register" className='nav-link'>
                    Don't have an account, Click Here
                </Link>
            </CContainer>
        </>
    )
}
