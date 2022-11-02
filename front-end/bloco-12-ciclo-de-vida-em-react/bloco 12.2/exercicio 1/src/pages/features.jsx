import React from 'react'

class Features extends React.Component
{
  goBackTo = () => {
    const { history } = this.props;
    history.push('/');
  }

  render()
  {
    return (
      <>
        <h2 className='h2'>Features</h2>
        <button onClick={this.goBackTo}>Voltar</button>
      </>

    );
  }
}

export default Features;
