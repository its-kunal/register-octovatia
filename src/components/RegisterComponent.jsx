import React, { useRef } from 'react'
import {
    CContainer, CButton,
    CCardTitle, CForm, CFormInput, CFormLabel, CRow, CCol,
    CFormCheck, CFormSelect
} from '@coreui/react';
import { Link } from 'react-router-dom';

export default function RegisterComponent() {
    const formRef = useRef()
    return (
        <>
            <CCardTitle className='fw-bold mt-0 mb-5'>Register Yourself in most amazing and secure place.</CCardTitle>
            <CForm className='text-start px-4' ref={formRef} onSubmit={(e) => {
                e.preventDefault()
                let av = formRef.current
                let v = {
                    name: av.firstname.value,
                    middlename: av.middlename.value,
                    lastname: av.lastname.value,
                    isage18: av.isage18.value,
                    email: av.email.value,
                    password: av.pswd.value,
                    referral: av.referral.value,
                    country: av.country.value,
                    tc: av.tc.checked
                }
                if (!!v.name && !!v.lastname && !!v.isage18 && !!v.email && !!v.password && !!v.tc) {
                    console.log(v)
                    let lis = localStorage.getItem('users')
                    let li = JSON.parse(lis)
                    let l = []
                    if (!!li) {
                        l.push(...li)
                    }
                    l.push(v)
                    localStorage.setItem('users', JSON.stringify(l))
                    formRef.current.reset()
                }
            }}>
                <CRow>
                    <CCol xs={12} md={4} className="mb-3">
                        <CFormLabel htmlFor="firstname">First Name</CFormLabel>
                        <CFormInput
                            type="text"
                            id="firstname"
                            placeholder="First Name"
                            required
                            name='firstname'
                        />
                    </CCol>
                    <CCol xs={12} md={4} className="mb-3">
                        <CFormLabel htmlFor="middlename">Middle Name</CFormLabel>
                        <CFormInput
                            type="text"
                            id="middlename"
                            placeholder="Middle Name"
                        />
                    </CCol>
                    <CCol xs={12} md={4} className="mb-3">
                        <CFormLabel htmlFor="lastname">Last Name</CFormLabel>
                        <CFormInput
                            type="text"
                            id="lastname"
                            placeholder="Last Name"
                            required
                        />
                    </CCol>
                </CRow>
                <CRow className='mb-3'>
                    <CCol>
                        <div className='mb-2'>Are you 18 years old?</div>
                        <CFormCheck inline type="radio" name="isage18" id="inlineCheckbox1" value="yes" label="YES" defaultChecked />
                        <CFormCheck inline type="radio" name="isage18" id="inlineCheckbox2" value="no" label="NO" />
                    </CCol>
                </CRow>
                <CRow
                    className='mb-3'>
                    <CCol><CFormInput
                        name='email'
                        type="email"
                        label="Email address*"
                        placeholder="name@example.com"
                        text="Must be 8-20 characters long."
                        aria-describedby="exampleFormControlInputHelpInline"
                        required
                    /></CCol>
                </CRow>
                <CRow
                    className='mb-3'>
                    <CCol><CFormInput
                        name='pswd'
                        type="password"

                        label="Enter Password*"
                        placeholder="Create a Password"
                        text="8 characters in length
                      upper and lowercase alphabetic characters
                      Have at least one numerical character
                      Have at least one special character (e.g. ~!@#$%^&*()_-+=)"
                        aria-describedby="exampleFormControlInputHelpInline"
                        required
                    /></CCol>
                </CRow>
                <CRow
                    className='mb-3'>
                    <CCol><CFormInput
                        name='rpswd'
                        type="password"

                        label="Confirm Password*"
                        placeholder="Enter Password Again."
                        required
                    /></CCol>
                </CRow>
                <CRow className="mb-3">
                    <CCol>
                        <CFormInput type='text'
                            name='referral'
                            label='Referral Code - Optional'
                            placeholder='referral code'
                        />
                    </CCol>
                </CRow>
                <CRow className='mb-3'>
                    <CCol>
                        <CFormSelect
                            required
                            name='country'
                            label='Country*'
                            aria-label="Default select example"
                            options={[
                                'India', 'USA', 'Canada', 'China'
                            ]}
                        />
                    </CCol>
                </CRow>
                <CRow>
                    <CCol>
                        <CFormCheck label="I have Agreed to Terms & Conditions" name='tc' />
                    </CCol>
                </CRow>
                <CButton color='success' className='mt-4' type='submit'
                >Register</CButton>
            </CForm>
            <CContainer>
                <Link to="/login" className='nav-link'>Already had an account, Click Here</Link>
            </CContainer>
        </>
    )
}
