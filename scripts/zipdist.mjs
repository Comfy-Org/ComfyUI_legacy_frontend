import zipdir from 'zip-dir'

zipdir('./src', { saveTo: './dist.zip' }, function (err, buffer) {
  if (err) {
    console.error('Error zipping "dist" directory:', err)
  } else {
    console.log('Successfully zipped "dist" directory.')
  }
})
