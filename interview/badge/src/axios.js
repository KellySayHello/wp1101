import axios from 'axios'
import ReactDOM, { render } from 'react-dom'
import React, { useEffect, useState, Component, Fragment } from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import styled from 'styled-components'
import Avatar from '@mui/material/Avatar'
import CircularProgress from '@mui/material/CircularProgress'

const Space = styled.section`
  width: 50px;
  height: 50px;
`
const SmallSpace = styled.section`
  width: 5px;
  height: 5px;
`
const User = () => {
  const [user, setUser] = useState({
    name: '',
    id: '',
    keyword: '',
    intro: '',
    avatar: '',
  })

  const [services, setServices] = useState([])
  const [badges, setBadges] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const [{ user, services, badges }] = await Promise.all([requestData()])

      setUser(user)
      setServices([...services])
      setBadges([...badges])
    }

    fetchData()
  }, [])

  const requestData = async () => {
    try {
      let {
        data: { user, services, badges },
      } = await axios.get('https://badge.g0v.tw/_/user/api/ronnywang')
      return { user, services, badges }
    } catch (error) {
      return 'Invalid input'
    }
  }

  if (services.length === 0 && badges.length === 0) {
    console.log('no element in service')
    return (
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '100vh' }}
      >
        <Grid item xs={3}>
          <CircularProgress color="inherit" />
        </Grid>
      </Grid>
    )
  } else if (services.length !== 0 && badges.length !== 0) {
    return (
      <>
        <Stack direction="row" spacing={2}>
          <Space></Space>
          <Stack direction="column" spacing={0}>
            <Space></Space>
            <Avatar
              alt="Remy Sharp"
              src={user.avatar}
              sx={{ width: 200, height: 200 }}
            />
            <Typography variant="h4" align="center" color="text.primary">
              {user.name}
            </Typography>
            <Typography
              variant="h6"
              align="center"
              color="text.secondary"
              component="p"
            >
              @{user.id}
            </Typography>
            <Typography
              variant="h8"
              align="center"
              color="text.secondary"
              component="p"
            >
              {user.intro}
            </Typography>
            <Typography
              variant="h8"
              align="center"
              color="text.secondary"
              component="p"
            >
              {user.keyword}
            </Typography>
          </Stack>
          {/* End hero unit */}
          <Container maxWidth="md" component="main">
            {services.map((services) => (
              <Stack>
                <Space />
                <Card>
                  <CardHeader
                    title={
                      <>
                        <Link href={services.link} underline="hover">
                          {services.service}
                        </Link>
                      </>
                    }
                    subheader={services.name}
                    titleTypographyProps={{ align: 'center' }}
                    subheaderTypographyProps={{
                      align: 'center',
                    }}
                    sx={{
                      backgroundColor: (theme) =>
                        theme.palette.mode === 'light'
                          ? theme.palette.grey[200]
                          : theme.palette.grey[700],
                    }}
                  />
                  <CardContent>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'baseline',
                        mb: 2,
                      }}
                    ></Box>
                    <Grid container spacing={2}>
                      <Grid item xs={2} md={2}>
                        <Typography>date</Typography>
                      </Grid>
                      <Grid item xs={2} md={3}>
                        <Typography>brief</Typography>
                      </Grid>
                      <Grid item xs={2} md={5}>
                        <Typography>title</Typography>
                      </Grid>
                      <Grid item xs={2} md={2}>
                        <Typography>rank</Typography>
                      </Grid>
                    </Grid>
                    {badges.map((badges) => (
                      <Stack spacing={1}>
                        {badges.serviceuser_id == services.serviceuser_id ? (
                          <>
                            <SmallSpace />
                            <Grid container spacing={2}>
                              <Grid item xs={2} md={2}>
                                <Typography>{badges.time}</Typography>
                              </Grid>
                              <Grid item xs={2} md={3}>
                                <Typography>{badges.brief}</Typography>
                              </Grid>
                              <Grid item xs={2} md={5}>
                                <Link href={badges.url}>{badges.title}</Link>
                              </Grid>
                              <Grid item xs={2} md={2}>
                                <Typography>
                                  {badges.rank}/{badges.total}
                                </Typography>
                              </Grid>
                            </Grid>

                            <Divider />
                          </>
                        ) : (
                          <></>
                        )}
                      </Stack>
                    ))}
                  </CardContent>
                </Card>
              </Stack>
            ))}
          </Container>
        </Stack>
      </>
    )
  }
}

export default User
