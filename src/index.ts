interface ProjectConfig {
  projectId:number
  projectName:string
  commitSha: string
}
interface ReportCoverageParams {
  dsn: string
  projectConfig:ProjectConfig
}
function reportCoverage(params:ReportCoverageParams) {
  const {dsn,projectConfig} = params
  fetch(dsn,{
    method:'POST',
    headers:{
      'content-type': 'application/json'
    },
    body:JSON.stringify({
      "projectId": projectConfig.projectId,
      "projectName": projectConfig.projectName,
      "commitSha": projectConfig.commitSha,
      // @ts-ignore
      "coverage": window.__coverage__
    })
  }).then(res=>{
    console.log(res)
  })
}

export default {
  reportCoverage:reportCoverage
}