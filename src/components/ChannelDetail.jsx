import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { Videos, ChannelCard } from './';
import { fetchFromApi } from '../utils/fetchFromApi';

const ChannelDetail = ({ marginTop }) => {
	const { id } = useParams();
	const [channeldetail, setChannelDetail] = useState(null);
	const [videos, setVideos] = useState([]);
	useEffect(() => {
		fetchFromApi(`channels?part=snippet&id=${id}`).then((data) =>
			setChannelDetail(data?.items[0])
		);
		fetchFromApi(`search?channelId=${id}&part=snippet&order=date`).then(
			(data) => setVideos(data?.items)
		);
	}, [id]);

	console.log(channeldetail, videos);
	return (
		<Box minHeight='95vh'>
			<Box>
				<div
					style={{
						background: 'rgb(2,0,36)',
						background:
							'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(108,9,121,1) 35%, rgba(0,212,255,1) 100%)',
						zIndex: 10,
						height: '300px',
					}}
				/>
				<ChannelCard channelDetail={channeldetail} marginTop={'-110px'} />
			</Box>
			<Box display='flex' p='2'>
				<Box sx={{ mr: { sm: '100px' } }} />
				<Videos videos={videos} />
			</Box>
		</Box>
	);
};

export default ChannelDetail;
