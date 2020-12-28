import React, { useState } from 'react'
import { Box, Button, Container, Link, TextField, Typography } from '@material-ui/core';
import Axios from 'axios'

const ShortenUrl = () => {
    const [url, setUrl] = useState('')
    const body = { url }
    const [shortUrl, setShortUrl] = useState('')
    const onSubmit = async (e) => {
        e.preventDefault()
        const res = await Axios.post(
            '/api/shorturl', 
            body,
            {}
        )
        setShortUrl(res.data.shortUrl)
    }
    return (
        <div style={{height: '90vh', alignContent:'center', alignItems: 'center', display:'flex'}}>
            <Container>
                <form onSubmit={onSubmit}>
                <Box display='flex' justifyContent='center' alignContent='center'>
                    <Box mx={2} width={1/2}>
                        <TextField id="outlined-search" inputProps={{type:'url'}} fullWidth onChange={(e) => setUrl(e.target.value)} label="Enter URL" type="search" variant="outlined" required  />
                    </Box>
                    <Box mx={2}>
                        <Button variant="contained" type='submit' size='large' color="primary">
                            Shorten URL
                        </Button> 
                    </Box>
                </Box>
                <Box>
                { shortUrl && 
                    <Box my={2}>
                    Short URL : 
                        <Link href={shortUrl} target='_blank' rel="noopener noreferrer">
                            {shortUrl}
                        </Link>
                    </Box>
                }
                </Box>
                </form>
            </Container>
        </div>
    )
}

export default ShortenUrl
