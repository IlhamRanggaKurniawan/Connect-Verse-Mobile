import * as SecureStore from 'expo-secure-store';
import { jwtDecode } from 'jwt-decode';
import { useEffect, useState } from 'react';


export const useSession = () => {
    const [user, setUser] = useState({})
    const [token, setToken] = useState({})

    useEffect(() => {
        const fetchToken = async () => {
            try {
              const token = await SecureStore.getItemAsync("Token");
              if (token) {
                setToken(token)
                const decoded = jwtDecode(token);
                setUser(decoded);
              }
            } catch (error) {
              console.error('Error fetching the token:', error);
            }
          };
      
          fetchToken();
    }, [])

    return {user, token}
}