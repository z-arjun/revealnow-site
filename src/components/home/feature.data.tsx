import React, { ReactNode } from 'react'
import ArtTrackIcon from '@mui/icons-material/ArtTrack'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary'
import ContactSupportIcon from '@mui/icons-material/ContactSupport'
import NoCrashIcon from '@mui/icons-material/NoCrash'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee'
import ScheduleIcon from '@mui/icons-material/Schedule'

interface Data {
  title: string
  description: string
  icon?: ReactNode
}

export const data: Data[] = [
  {
    title: 'Seamless Vehicle Inspections',
    description: 'Quick, detailed checks for informed decisions.',
    icon: <NoCrashIcon />,
  },
  {
    title: 'Value-Focused Pricing',
    description: 'Quality inspections at competitive rates.',
    icon: <CurrencyRupeeIcon />,
  },
  {
    title: 'Flexible Scheduling',
    description: 'Inspections when it suits you best.',
    icon: <ScheduleIcon />,
  },
  {
    title: 'Professional Guidance',
    description: 'Direct advice from automotive experts.',
    icon: <ContactSupportIcon />,
  },
]
