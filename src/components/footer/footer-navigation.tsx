import React, { FC } from 'react'
import Link from 'next/link'
import Grid from '@mui/material/Grid'
import MuiLink from '@mui/material/Link'
import type { Navigation } from '@/interfaces/navigation'
import { navigations as headerNavigations } from '@/components/navigation/navigation.data'
import { FooterSectionTitle } from '@/components/footer'

const courseMenu: Array<Navigation> = [
  // {
  //   label: 'UI/UX Design',
  //   path: '#',
  // },
  // {
  //   label: 'Mobile Development',
  //   path: '#',
  // },
  // {
  //   label: 'Machine Learning',
  //   path: '#',
  // },
  // {
  //   label: 'Web Development',
  //   path: '#',
  // },
]

const pageMenu = headerNavigations

const companyMenu: Array<Navigation> = [
  // { label: 'Contact Us', path: '#' },
  { label: 'Privacy & Policy', path: 'https://s3.ap-south-1.amazonaws.com/revealnow.in/pp.pdf' },
  { label: 'Term & Condition', path: 'https://s3.ap-south-1.amazonaws.com/revealnow.in/tnc.pdf' },
  { label: 'FAQ', path: '#' },
]

interface NavigationItemProps {
  label: string
  path: string
}

const NavigationItem: FC<NavigationItemProps> = ({ label, path }) => {
  const isNewTab = path.startsWith('http')
  return (
    <Link href={path} passHref>
      <MuiLink
        underline="hover"
        sx={{
          display: 'block',
          mb: 1,
          color: 'primary.contrastText',
        }}
        target={isNewTab ? '_blank' : undefined}
        rel={isNewTab ? 'noopener noreferrer' : undefined}
      >
        {label}
      </MuiLink>
    </Link>
  )
}

const FooterNavigation: FC = () => {
  return (
    <Grid container spacing={2} id="footer-navigation">
      <Grid item xs={12} md={2}>
        {/* Menu Section */}
        <FooterSectionTitle title="Menu" />
        {pageMenu.map(({ label, path }, index) => (
          <NavigationItem key={index + path} label={label} path={path} />
        ))}
      </Grid>

      <Grid item xs={12} md={4}>
        {/* About Section */}
        <FooterSectionTitle title="About" />
        {companyMenu.map(({ label, path }, index) => (
          <NavigationItem key={index + path} label={label} path={path} />
        ))}
      </Grid>

      {/* Contact Us Section */}
      <Grid item xs={12} md={6}>
        <FooterSectionTitle title="Contact Us" />
        <p>RevealNow,</p>
        <p>Support Contact: services@revealnow.in</p>
        <p>Address: A-209, Gera World of Joy, Kharadi</p>
      </Grid>
    </Grid>
  )
}

export default FooterNavigation
