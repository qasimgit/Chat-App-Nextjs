import styled from "styled-components";
import { Avatar, IconButton } from "@material-ui/core";

export const Container = styled.div``;

export const Header = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 1;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  border-bottom: 1px solid whitesmoke;
`;

export const UserAvatar = styled(Avatar)`
  margin: 10px;
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;

export const IconContainer = styled.div``;

export const Search = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  border-radius: 2px;
`;

export const SearchInput = styled.input`
  outline-width: 0;
  border: none;
  flex: 1;
`;
