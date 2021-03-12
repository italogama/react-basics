import React, { useState } from 'react'
import { Input } from 'react-bootstrap'

export default (props) => {
    
    const [nome, setNome] = useState('Ítalo')

    return (
        <>  
            <h3>{nome}</h3>
            <input type="text" value={nome}
                onChange={e => setNome(e.target.value)} />
        </>
    )

}
