import { useRouter } from 'next/router';
import { useState } from 'react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Card from '@/components/Card';
import CardHeader from '@/components/CardHeader';
import CardBody from '@/components/CardBody';
import CardFooter from '@/components/CardFooter';
import ButtonGroup from '@/components/ButtonGroup';
import Button from '@/components/Button';
import Input from '@/components/Input';
import Label from '@/components/Label';
import styled from 'styled-components';
import Form from '@/components/Form';
import SelectInput from '@/components/SelectInput';
import axios from 'axios';
import gameServices from '@/services/gameServices';
import ThreeDotsLoading from '@/components/ThreeDotsLoading';

const DivStyles = styled.div`
  margin-bottom: 1.5rem;
  padding-left: 0px;
  padding-right: 0px;
`;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'footer'])),
    },
  };
}
const JoinGame = () => {
  const { t } = useTranslation('common');

  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const goToMainMenu = () => {
    router.push('/');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const response = await gameServices.joinGame({
      formData: { ...formData },
      setErrors,
      setLoading,
    });

    if (response && response.status === 201) {
      const { gameCode } = response.data;
      router.push(`/game/waiting/${gameCode}`);
    }
  };

  return (
    <Form>
      <Card>
        <CardHeader>{t('new-game')}</CardHeader>
        <CardBody>
          <DivStyles>
            <Label name="fullname" text="Enter Your Name" />
            <Input
              name="fullname"
              id="fullname"
              type="text"
              onChange={handleChange}
              required={true}
              errors={errors}
            />
          </DivStyles>
          <DivStyles>
            <Label name="gameCode" text="Enter Game Code" />
            <Input
              name="gameCode"
              id="gameCode"
              type="text"
              onChange={handleChange}
              required={true}
              errors={errors}
            />
          </DivStyles>
        </CardBody>
        <CardFooter>
          <ButtonGroup>
            <Button
              text={'Back'}
              buttontype={'regular'}
              onClick={goToMainMenu}
            />
            <Button
              text={'Join'}
              buttontype={'success'}
              onClick={handleSubmit}
            />
          </ButtonGroup>
        </CardFooter>
      </Card>
    </Form>
  );
};
export default JoinGame;
