import React from 'react'

class About extends React.Component
{
  goBackTo = () => {
    const { history } = this.props;
    history.push('/');
  }

  render()
  {
    return (
      <>
        <h2 className='h2'>About</h2>
        <button onClick={this.goBackTo}>Voltar</button>
      </>
    );
  }
}

export default About;
