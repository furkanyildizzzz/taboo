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
const NewGame = () => {
  const { t } = useTranslation('common');

  const [formData, setFormData] = useState({
    gameTurn: 2,
    gameTime: 60,
    gameTeam: 2,
  });
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

    const response = await gameServices.createGame({
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
            <p
              style={{
                fontSize: '2rem',
                fontWWeight: '500',
                textAlign: 'center',
              }}
            >
              End Game Method
            </p>

            <SelectInput
              labelText={'Turns per Person'}
              name={'gameTurn'}
              tabindex={'4'}
              onChange={handleChange}
              options={[
                { value: 1, text: '1 Turn' },
                { value: 2, text: '2 Turn' },
                { value: 3, text: '3 Turn' },
                { value: 4, text: '4 Turn' },
                { value: 5, text: '5 Turn' },
              ]}
              defaultValue={2}
            />

            <SelectInput
              labelText={'Timer'}
              name={'gameTime'}
              tabindex={'4'}
              onChange={handleChange}
              options={[
                { value: 30, text: '30 minutes' },
                { value: 60, text: '60 minutes' },
                { value: 90, text: '90 minutes' },
                { value: 120, text: '120 minutes' },
              ]}
              defaultValue={60}
            />

            <SelectInput
              labelText={'Teams'}
              name={'gameTeam'}
              tabindex={'4'}
              onChange={handleChange}
              options={[
                { value: 2, text: '2 Teams' },
                { value: 3, text: '3 Teams' },
                { value: 4, text: '4 Teams' },
              ]}
              defaultValue={2}
            />
          </DivStyles>
          <DivStyles>
            {loading && <ThreeDotsLoading text={'Creating game'} />}
          </DivStyles>
          <DivStyles>
            {Object.keys(errors).length > 0 && <p>Failed to create game</p>}
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
              text={'Submit'}
              buttontype={'success'}
              onClick={handleSubmit}
            />
          </ButtonGroup>
        </CardFooter>
      </Card>
    </Form>
  );
};
export default NewGame;
