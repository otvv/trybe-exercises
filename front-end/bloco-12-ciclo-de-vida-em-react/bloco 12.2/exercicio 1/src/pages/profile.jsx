import React from 'react'

class Profile extends React.Component {

  goBackTo = () => {
    const { history } = this.props;
    history.push('/');
  }

  render() {

    const { name } = this.props;
    const { uid } = this.props.match.params;

    return (
      <>
        <h2 className='h2'>Bem vindo, { name }! seu UID: { uid }</h2>
        <button onClick={ this.goBackTo }>Voltar</button>
      </>
    );
  }
}

export default Profile;
