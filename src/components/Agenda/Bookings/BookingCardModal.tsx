import { Fragment, useContext } from "react";
import styled from "styled-components";
import ParametersContext from "../../../contexts/parameters/parameters-context";
import { BigBody, BodyRegular, SmallHeadline } from "../../../theme/text";
import { Booking } from "../../../types/booking";
import toHours from "../../../utils/toHours";
import { PrimaryButton, SecondaryButton } from "../../Button";
import CheckboxChecked from "../../Icons/CheckboxChecked";
import Modal from "../../Modal";

const CardModal = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.background};
`;

const Line = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 45px;
  &:last-child {
    margin-bottom: 0;
  }
`;

const Label = styled.span`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.policeDark};
  min-width: 200px;
`;

const Infos = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Info = styled.span`
  width: min-content;
  margin-right: 17px;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.policeDark};
  border: 1px solid ${({ theme }) => theme.colors.borderLight};
  border-radius: 4px;
  padding: 18px 42px;
  white-space: nowrap;
  &:last-child {
    margin-right: 0;
  }
`;

const BackgroundInfo = styled(BigBody)`
  display: flex;
  align-items: center;
  margin-right: 8px !important;
`;

const BlackBackgroundInfo = styled(BackgroundInfo)`
  color: ${({ theme }) => theme.colors.policeDark};
`;

const ServicesListWrapper = styled.div`
  max-height: 210px;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;

const BookingColorSquare = styled.div<{ color: string }>`
  width: 14px;
  height: 14px;
  background-color: ${({ theme, color }) => theme.colors.cardColors[color]};
  border-radius: 2px;
  margin-right: 17px;
`;

const PriceAndDuration = styled.div`
  display: flex;
`;

const Separator = styled.div`
  margin: 20px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderMedium};
`;

const Links = styled.div`
  display: flex;
`;

const Link = styled.span`
  margin-right: 50px;
  font-size: 14px;
  font-weight: 700;
  text-decoration: underline;
  color: ${({ theme }) => theme.colors.policeDark};
`;

const SMS = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.policeDark};
`;

const ButtonsWrapper = styled.div``;

interface BookingCardModalProps {
  isOpen: boolean;
  onDismiss: () => void;
  openedBooking: Booking;
}

export default function BookingCardModal({
  isOpen,
  onDismiss,
  openedBooking,
}: BookingCardModalProps) {
  const parametersCtx = useContext(ParametersContext);
  const servicesList =
    openedBooking &&
    openedBooking.services?.map((service, index, array) => (
      <Fragment key={index}>
        <Infos>
          <Info style={{ padding: "18px 30px" }}>
            <BookingColorSquare
              color={parametersCtx.cardColors[`${service._id.substring(0, 2)}`]}
            />
            <BodyRegular>{service.title}</BodyRegular>
          </Info>
          <PriceAndDuration>
            <Info style={{ marginRight: "8px", padding: "18px 21px" }}>
              <BodyRegular>{service.duration}</BodyRegular>
            </Info>
            &nbsp;
            <BackgroundInfo>min</BackgroundInfo>
            <Info style={{ marginRight: "8px", padding: "18px 21px" }}>
              <BodyRegular>{service.price}</BodyRegular>
            </Info>
            &nbsp;
            <BackgroundInfo>€</BackgroundInfo>
          </PriceAndDuration>
        </Infos>
        {index < array.length - 1 && <Separator />}
      </Fragment>
    ));
  return (
    <Modal isOpen={isOpen} onDismiss={onDismiss}>
      <CardModal>
        <Line>
          <Label>
            <SmallHeadline>Cliente</SmallHeadline>
          </Label>
          <Infos>
            <Info>
              <BodyRegular>{openedBooking?.customer?.name}</BodyRegular>
            </Info>
            <Info>
              <BodyRegular>{openedBooking?.customer?.tel}</BodyRegular>
            </Info>
            <Info>
              <BodyRegular>{openedBooking?.customer?.mail}</BodyRegular>
            </Info>
          </Infos>
        </Line>
        <Line>
          <Label>
            <SmallHeadline>Date</SmallHeadline>
          </Label>
          <Infos>
            <Info style={{ marginRight: "34px" }}>
              <BodyRegular>
                {openedBooking?.serviceTime?.toLocaleString({
                  weekday: "long",
                  day: "numeric",
                  month: "long",
                })}
              </BodyRegular>
            </Info>
            <Info style={{ marginRight: "8px", padding: "18px 21px" }}>
              <BodyRegular>
                {openedBooking?.serviceTime?.start.hour < 10 && 0}
                {openedBooking?.serviceTime?.start.hour}
              </BodyRegular>
            </Info>
            <BackgroundInfo>&nbsp;h&nbsp;</BackgroundInfo>
            <Info style={{ padding: "18px 21px" }}>
              <BodyRegular>
                {openedBooking?.serviceTime?.start.minute < 10 && 0}
                {openedBooking?.serviceTime?.start.minute}
              </BodyRegular>
            </Info>
            <BackgroundInfo>&nbsp;à&nbsp;</BackgroundInfo>
            <BlackBackgroundInfo>
              &nbsp;{openedBooking?.serviceTime?.end.hour < 10 && 0}
              {openedBooking?.serviceTime?.end.hour}h
              {openedBooking?.serviceTime?.end.minute < 10 && 0}
              {openedBooking?.serviceTime?.end.minute}&nbsp;
            </BlackBackgroundInfo>
            <BackgroundInfo>
              durée:&nbsp;
              <BlackBackgroundInfo>
                {toHours(openedBooking?.serviceTime?.length("minutes"))}
              </BlackBackgroundInfo>
            </BackgroundInfo>
          </Infos>
        </Line>
        <Line>
          <Label>
            <SmallHeadline>Prestations</SmallHeadline>
          </Label>
          <ServicesListWrapper>{servicesList}</ServicesListWrapper>
        </Line>
        <Separator />
        <Line style={{ justifyContent: "space-between" }}>
          <Links>
            <Link>Venue</Link>
            <Link>Pas venue</Link>
            <Link>Supprimer</Link>
          </Links>
          <SMS>
            <CheckboxChecked />
            &nbsp;SMS de rappel
          </SMS>
          <ButtonsWrapper>
            <SecondaryButton
              style={{ marginRight: "40px" }}
              onClick={onDismiss}
              whileTap={{ scale: 0.9 }}
            >
              Retour
            </SecondaryButton>
            <PrimaryButton>{openedBooking?.total}</PrimaryButton>
          </ButtonsWrapper>
        </Line>
      </CardModal>
    </Modal>
  );
}
