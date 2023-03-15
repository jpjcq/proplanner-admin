import styled, { IntrinsicElementsKeys } from "styled-components";
import { SmallSubHeader } from "../../theme/text";
import { Link } from "../Link";
import { Customer } from "../../types/customer";
// Import from db
import dummyCustomers from "../../data/dummyCustomers";
import { SeparatorLight } from "../Separator";
import { Fragment } from "react";

const RelativeWrapper = styled.div`
  height: 728px;
  position: relative;
  margin: 0 14px 14px 14px;
  padding: 10px 0;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.boxShadowMedium.outset};
  border-radius: 20px;
`;

const CustomerLine = styled.div`
  width: 100%;
  padding: 20px 50px;
  display: flex;

  white-space: nowrap;
`;

const Name = styled.div`
  flex-grow: 1;
`;

const Infos = styled.div`
  flex-grow: 1;
  display: flex;
`;

const Links = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
`;

interface CustomerListProps {
  searchBarContent: string;
}

export default function CustomerList({ searchBarContent }: CustomerListProps) {
  const searchResultList = dummyCustomers.filter((customer, _, array) => {
    if (searchBarContent.charAt(0) === "0") {
      return customer.tel
        .replace(/\s/g, "")
        .match(searchBarContent.replace(/\s/g, ""));
    } else {
      return customer.name.toLowerCase().match(searchBarContent.toLowerCase());
    }
  });

  const fullCustomerList = searchResultList.map((customer, index, array) => (
    <Fragment key={index}>
      <CustomerLine>
        <Name>
          <SmallSubHeader>{customer.name}</SmallSubHeader>
        </Name>
        <Infos>
          <SmallSubHeader style={{ marginRight: "25px" }} fontWeight={500}>
            {customer.tel}
          </SmallSubHeader>
          <SmallSubHeader style={{ marginRight: "75px" }} fontWeight={500}>
            {customer.mail}
          </SmallSubHeader>
          <Links>
            <Link style={{ marginRight: "25px" }}>Modifier</Link>
            <Link>Supprimer</Link>
          </Links>
        </Infos>
      </CustomerLine>
      <SeparatorLight />
    </Fragment>
  ));
  return <RelativeWrapper>{fullCustomerList}</RelativeWrapper>;
}
