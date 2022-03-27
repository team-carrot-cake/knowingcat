import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	height: 120px;
	margin-top: 20px;
	padding: 10px;
	border-radius: 12px;
	border: 1px solid #cccccc;
	justify-content: center;
	align-items: center;
	text-align: center;
`;

export default function QuizProgress() {
	return <Container>퀴즈 진행 이미지 표시</Container>;
}
