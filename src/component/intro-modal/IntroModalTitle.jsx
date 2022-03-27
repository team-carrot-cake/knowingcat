import React from 'react';
import styled from 'styled-components';

const Title = styled.div`
	font-size: 24px;
	font-weight: bold;
`;
const SubTitle = styled.div`
	font-size: 12px;
`;

export default function IntroModalTitle() {
	return (
		<div>
			<Title>Quiz: 고양이의 특성 알기</Title>
			<SubTitle>고양이는 어쩌구어쩌구....</SubTitle>
		</div>
	);
}
