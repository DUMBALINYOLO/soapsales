import styled from 'styled-components';

export const ButtonContainer = styled.button`
	 text-transform: capitalize;
	 font-size: 1.4rem;
	 background: transparent;
	 border: 0.1rem solid #DAF7A6;
	 color: #9ACD32;
	 border-radius: 0.5rem;
	 padding: 0.2rem 0.5rem;
	 cursor: pointer;
	 margin: 0.2rem 0.5rem 0.2rem, 0;
	 transition: all 0.5s ease-in-out;
	 &:hover{
		 background : yellow;
		 color: grey;
	 }
	 &:focus {
		outline: none;
	 }
`;
