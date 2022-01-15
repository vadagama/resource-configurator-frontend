import { API } from './../api/api';

const GET_SERVICES = 'GET_SERVICES';

const initialState = {
  services: [
    {
      databases: [
        {
          id: 1,
          title: 'Oracle database',
          description: 'Система управления базами данных компании Oracle',
          image:
            "src='https://img2.freepng.ru/20180526/usu/kisspng-microsoft-sql-server-sql-server-management-studio-5b0a14557259a0.9917237415273872214684.jpg",
        },
        {
          id: 1,
          title: 'Oracle database',
          description: 'Система управления базами данных компании Oracle',
          image:
            "src='https://img2.freepng.ru/20180526/usu/kisspng-microsoft-sql-server-sql-server-management-studio-5b0a14557259a0.9917237415273872214684.jpg",
        },
      ],
    },
    {
      compute: [
        {
          id: 1,
          title: 'Oracle database',
          description: 'Система управления базами данных компании Oracle',
          image:
            "src='https://img2.freepng.ru/20180526/usu/kisspng-microsoft-sql-server-sql-server-management-studio-5b0a14557259a0.9917237415273872214684.jpg",
        },
        {
          id: 1,
          title: 'Oracle database',
          description: 'Система управления базами данных компании Oracle',
          image:
            "src='https://img2.freepng.ru/20180526/usu/kisspng-microsoft-sql-server-sql-server-management-studio-5b0a14557259a0.9917237415273872214684.jpg",
        },
      ],
    },
  ],
};

const servicesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SERVICES: {
      return { ...state, ...action.data };
    }
    default:
      return state;
  }
};

export const getServices = () => {
  return (dispatch) => {
    API.getUsers.then((data) => {
      if (data) {
        dispatch(servicesReducer(data.items));
      }
    });
  };
};

export default servicesReducer;
