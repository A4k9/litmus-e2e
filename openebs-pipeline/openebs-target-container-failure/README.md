# OpenEBS Target Container Failure

## Experiment Metadata

<table>
<tr>
<th> Name </th>
<th> Description </th>
<th> Documentation Link </th>
</tr>
<tr>
 <td> OpenEBS Target Container Failure </td>
 <td> Kills the cstor target/Jiva controller container and checks if it gets created again. This scenario validates the behaviour of application and OpenEBS persistent volumes when chaos is induced on the OpenEBS data plane controller.
 </td>
 <td>  <a href="https://docs.litmuschaos.io/docs/openebs-target-container-failure/"> Here </a> </td>
 </tr>
 </table>

### Pipeline Runs

 
| Job ID |   Test Description         | Execution Time | Release Tag   | Test Result   |
 |---------|---------------------------| --------------|--------|--------|
 |    <a href= "https://gitlab.mayadata.io/litmuschaos/litmus-e2e/-/jobs/177013">177013</a>   |  OpenEBS Target Container Failure           |  Wed Jul 15 16:24:37 2020(IST)     |latest  |Passed :smiley:  |