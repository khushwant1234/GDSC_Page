import React from 'react'
import { CNav } from '@coreui/react'
import { CNavItem } from '@coreui/react'
import { CNavLink } from '@coreui/react'


const Navbar = () => {
    return (
      <>
        <CNav className="justify-center py-3 bg-[#34a853] gap-2 shadow-lg shadow-black sticky top-0 z-50 x">
            <CNavItem className='bg-[#4285f4] rounded-md  hover:shadow-sm hover:shadow-[#b738c9] '>
                <CNavLink href="/" active className='text-white'>
                Home
                </CNavLink>
            </CNavItem>
            <CNavItem className='bg-[#4285f4] rounded-md text-bold hover:shadow-sm hover:shadow-[#b738c9]'>
                <CNavLink href="/messages" className='text-white' >Messages</CNavLink>
            </CNavItem>
        </CNav>
      </>
    )}

export default Navbar
