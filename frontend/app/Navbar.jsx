import React from 'react'
import { CNav } from '@coreui/react'
import { CNavItem } from '@coreui/react'
import { CNavLink } from '@coreui/react'


const Navbar = () => {
    return (
      <>
        <CNav className="justify-center py-3 bg-[#00224d] gap-2 shadow-lg shadow-black sticky top-0 z-50 x">
            <CNavItem className='bg-[#a91d3a] rounded-md border-1 border-white hover:shadow-sm hover:shadow-black '>
                <CNavLink href="/" active className='text-white'>
                Home
                </CNavLink>
            </CNavItem>
            <CNavItem className='bg-[#a91d3a] rounded-md border-1 border-white text-bold hover:shadow-sm hover:shadow-black'>
                <CNavLink href="/messages" className='text-white ' >Messages</CNavLink>
            </CNavItem>
        </CNav>
      </>
    )}

export default Navbar
