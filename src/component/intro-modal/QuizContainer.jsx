import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	margin-top: 20px;
	padding: 20px;
`;

const QuizTitle = styled.h6`
	margin: 0px;
	color: #999999;
`;
const Quiz = styled.h4`
	margin: 0px;
`;
const QuizItemContainer = styled.div`
	padding: 5px;
	padding-left: 20px;
	border-bottom: 1px solid #eeeeee;
`;
const QuizItemSign = styled.span`
	color: #dd00dd;
	font-size: 14px;
	font-weight: bold;
`;

export default function QuizContainer() {
	return (
		<Container>
			{/* 문제 */}
			<QuizTitle>퀴즈 1 / 7</QuizTitle>
			<Quiz>고양이 특성이 아닌 것을 고르시오.</Quiz>
			{/* 문제 선택지 */}
			<QuizItemContainer>
				<QuizItemSign>A</QuizItemSign>
			</QuizItemContainer>
		</Container>
	);
}
