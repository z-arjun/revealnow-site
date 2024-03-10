import React, { useState, FC } from 'react'
import Box from '@mui/material/Box'
import InputBase from '@mui/material/InputBase'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { StyledButton } from '../styled-button'
import axios from 'axios'

const HomeNewsLetter: FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phoneNumber: '',
    email: '',
  })

  const [submitting, setSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState<boolean | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>): Promise<void> => {
    e.preventDefault() // Prevent default form submission
    setSubmitting(true)

    try {
      const response = await axios.post(
        'https://reveal-services-test.us-east-1.elasticbeanstalk.com/user/api/send-inquiry',
        formData
      )
      console.log('Submission Success:', response.data)
      setSubmitSuccess(true)
      // Optionally reset form here
      setFormData({
        name: '',
        address: '',
        phoneNumber: '',
        email: '',
      })
    } catch (error) {
      console.error('There was an issue sending your inquiry:', error)
      setSubmitSuccess(false)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <Box sx={{ backgroundColor: 'background.paper', py: { xs: 8, md: 10 } }}>
      <Container>
        <Box
          sx={{
            backgroundColor: 'secondary.main',
            borderRadius: 10,
            py: { xs: 4, md: 10 },
            px: { xs: 4, md: 8 },
            textAlign: 'center',
          }}
        >
          <Typography variant="h1" component="h2" sx={{ mb: 1, fontSize: { xs: 32, md: 42 } }}>
            Inquiry Form
          </Typography>
          <Typography sx={{ mb: 6 }}>Fill out the form below to send us an inquiry.</Typography>

          <Box
            component="form"
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: { xs: 'column', md: 'row' },
              justifyContent: 'space-around',
              width: { xs: '100%', md: 'auto' },
              mx: 'auto',
              gap: 2,
            }}
            noValidate
            autoComplete="off"
          >
            <InputBase
              name="name"
              sx={{ backgroundColor: 'background.paper', borderRadius: 3, width: '100%', height: '40px', px: 2 }}
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
            />
            <InputBase
              name="address"
              sx={{ backgroundColor: 'background.paper', borderRadius: 3, width: '100%', height: '40px', px: 2 }}
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
            />
            <InputBase
              name="phoneNumber"
              sx={{ backgroundColor: 'background.paper', borderRadius: 3, width: '100%', height: '40px', px: 2 }}
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
            <InputBase
              name="email"
              sx={{ backgroundColor: 'background.paper', borderRadius: 3, width: '100%', height: '40px', px: 2 }}
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
            />
            <Box>
              <StyledButton disableHoverEffect size="large" onClick={handleSubmit} disabled={submitting}>
                Send Inquiry
              </StyledButton>
            </Box>
            {submitSuccess === true && <Typography color="success.main">Inquiry sent successfully!</Typography>}
            {submitSuccess === false && (
              <Typography color="error.main">Failed to send inquiry. Please try again.</Typography>
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default HomeNewsLetter
