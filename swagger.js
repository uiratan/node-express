import swaggerAutogen from 'swagger-autogen';

const outputFile = './src/routes/swagger-output.json';
const endpointsFiles = ['./src/routes/livrosRoutes.js'];

// swaggerAutogen(outputFile, endpointsFiles);

swaggerAutogen(outputFile, endpointsFiles).then(async () => {
  console.log('Iniciando swagger!');
  await import('./server.js'); // Your project's root file
});

