import React from 'react';
import Modal from 'react-modal/lib/components/Modal';
import IntroModalTitle from '../component/intro-modal/IntroModalTitle';
import QuizContainer from '../component/intro-modal/QuizContainer';
import QuizProgress from '../component/intro-modal/QuizProgress';

// 모달 스타일
// const modalStyle = {
// 	overlay: {
// 		position: 'fixed',
// 		top: 0,
// 		left: 0,
// 		right: 0,
// 		bottom: 0,
// 		backgroundColor: 'rgba(255, 255, 255, 0.45)',
// 		zIndex: 10,
// 	},
// 	content: {
// 		display: 'flex',
// 		justifyContent: 'center',
// 		background: '#ffffff',
// 		overflow: 'auto',
// 		top: '42vh',
// 		left: '38vw',
// 		right: '38vw',
// 		bottom: '42vh',
// 		WebkitOverflowScrolling: 'touch',
// 		borderRadius: '14px',
// 		outline: 'none',
// 		zIndex: 10,
// 	},
// };
// styled.modal``;

const IntroModal = () => {
	return (
		<Modal isOpen={true} ariaHideApp={false}>
			{/* title */}
			<IntroModalTitle />
			{/* 진행 단계 박스 */}
			<QuizProgress />
			{/* 문제 박스 */}
			<QuizContainer />
		</Modal>
	);
};

export default IntroModal;
