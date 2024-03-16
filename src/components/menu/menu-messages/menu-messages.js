import './menu-messages.css';
import Box from './box/box';

const MenuMessages = () => {
    return (
        <section id='messages'>

           <Box name='Gediel Marques' message='Bom dia mano!' image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbHEbYswqvngeE8z_1L8FjHNyDgAEv1vAdRg&usqp=CAU' />
           <Box name='Mô' message='Encontrei no preço bom, amor!' image='https://media.licdn.com/dms/image/C4E03AQHsf_kgf3QTOQ/profile-displayphoto-shrink_800_800/0/1656462089739?e=2147483647&v=beta&t=wylqLaKPIKH1mFu9uZJpMsFO-RxVTC8Jds5tx8Zz-Fw' />
           <Box name='Simone - Formatura' message='Fez o teste lá?' image='https://s3-sa-east-1.amazonaws.com/doctoralia.com.br/doctor/9fe82c/9fe82c83728837020e63b0a904959708_large.jpg' />

            <div className='message-final'>
                Suas mensagens pessoais são protegidas com a <span className='text-link'>criptografia de ponta a ponta</span>
            </div>

        </section>
    );
}

export default MenuMessages;