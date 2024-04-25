import React from 'react';
import { useNavigate } from 'react-router-dom';

const MessageScreenComponent = () => {
    const navigate = useNavigate();
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '50px 0px',
            minHeight: '90vh'
        }}>
            <h1 
            style={{
                fontSize: '30px',
                fontWeight: '700',

            }}
            >No product in Order</h1>
            <button
            style={{
                padding: "10px",
                backgroundColor: 'green',
                fontSize: '15px',
                fontWeight: '600',
                borderRadius: '8px',
                color: '#fff'
            }}
            onClick={()=> navigate('/')}
            >Shop Now</button>
        </div>
    );
}

export default MessageScreenComponent;
