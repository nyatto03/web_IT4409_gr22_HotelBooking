import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Typography, Space } from 'antd';

const { Title, Paragraph } = Typography;

const ForbiddenPage = () => {
  const [countdown, setCountdown] = useState(3); 
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prevCountdown => {
        if (prevCountdown <= 1) {
          clearInterval(timer);
          navigate('/login');
        }
        return prevCountdown - 1;
      });
    }, 1000); 

    return () => clearInterval(timer);
  }, [navigate]);

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <Title level={2}>Forbidden Access</Title>
      <Paragraph>You do not have permission to view this page.</Paragraph>
      <Paragraph>
        You will be redirected to the login page in {countdown} second{countdown !== 1 ? 's' : ''}...
      </Paragraph>
      
      {/* Button to redirect to login page immediately */}
      <Space>
        <Button type="primary" onClick={() => navigate('/login')} size="large">
          Go to Login Page
        </Button>
      </Space>
    </div>
  );
};

export default ForbiddenPage;
