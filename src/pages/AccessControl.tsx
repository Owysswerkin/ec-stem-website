import { Card } from "@/components/ui/card";
const AccessControl = () => {
  return <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="mb-12 text-center animate-fade-in">
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Access Control Policy
          </h1>
          <div className="space-y-1 text-sm text-muted-foreground">
            <p>Document No.: EC-POL-IS-002</p>
            <p>Effective Date: 11 November 2025</p>
            <p>Revision: 1.0</p>
          </div>
        </div>

        {/* Version History */}
        <Card className="p-6 mb-8 animate-fade-in">
          <h2 className="text-xl font-semibold mb-4">Version History</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="border-b">
                <tr className="text-left">
                  <th className="pb-2 font-semibold">Version</th>
                  <th className="pb-2 font-semibold">Date</th>
                  <th className="pb-2 font-semibold">Prepared By</th>
                  <th className="pb-2 font-semibold">Reviewed By</th>
                  <th className="pb-2 font-semibold">Approved By</th>
                  <th className="pb-2 font-semibold">Summary</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="pt-2">1.0</td>
                  <td className="pt-2">11 Nov 2025</td>
                  <td className="pt-2">Data Protection Officer / IT Manager</td>
                  <td className="pt-2">HR Manager</td>
                  <td className="pt-2">Managing Director</td>
                  <td className="pt-2">Initial release</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>

        {/* Table of Contents */}
        <Card className="p-6 mb-8 animate-fade-in">
          <h2 className="text-xl font-semibold mb-4">Contents</h2>
          <nav className="space-y-2">
            <a href="#purpose" className="block hover:text-primary transition-colors">1. Purpose</a>
            <a href="#scope" className="block hover:text-primary transition-colors">2. Scope</a>
            <a href="#objectives" className="block hover:text-primary transition-colors">3. Objectives</a>
            <a href="#roles" className="block hover:text-primary transition-colors">4. Roles and Responsibilities</a>
            <a href="#logical" className="block hover:text-primary transition-colors">5. Logical Access Control</a>
            <a href="#physical" className="block hover:text-primary transition-colors">6. Physical Access Control</a>
            <a href="#enforcement" className="block hover:text-primary transition-colors">7. Policy Enforcement</a>
            <a href="#review" className="block hover:text-primary transition-colors">8. Review and Maintenance</a>
          </nav>
        </Card>

        {/* 1. Purpose */}
        <Card className="p-6 mb-8 animate-fade-in" id="purpose">
          <h2 className="text-2xl font-bold mb-4">1. Purpose</h2>
          <p className="text-muted-foreground leading-relaxed">
            This policy defines the requirements for controlling access to Ec stem Pte. Ltd.'s information systems, 
            physical premises, and data resources to ensure confidentiality, integrity, and availability.
          </p>
        </Card>

        {/* 2. Scope */}
        <Card className="p-6 mb-8 animate-fade-in" id="scope">
          <h2 className="text-2xl font-bold mb-4">2. Scope</h2>
          <p className="text-muted-foreground mb-4">
            This policy applies to all employees, fractional contractors, and managers who have access to:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
            <li>Ecstem's Google Workspace environment (Gmail, Drive, Sheets, and related apps)</li>
            <li>Company-managed MacBooks and devices</li>
            <li>Physical office and classroom areas containing equipment or data</li>
            <li>Any storage or system used to manage student, partner, or operational data</li>
          </ul>
        </Card>

        {/* 3. Objectives */}
        <Card className="p-6 mb-8 animate-fade-in" id="objectives">
          <h2 className="text-2xl font-bold mb-4">3. Objectives</h2>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
            <li>To define a structured, role-based access framework</li>
            <li>To ensure only authorized users have access to company information and systems</li>
            <li>To maintain proper account lifecycle management, including creation, review, and removal</li>
            <li>To protect both logical and physical access to sensitive information</li>
          </ul>
        </Card>

        {/* 4. Roles and Responsibilities */}
        <Card className="p-6 mb-8 animate-fade-in" id="roles">
          <h2 className="text-2xl font-bold mb-6">4. Roles and Responsibilities</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">4.1 IT Manager / Data Protection Officer (DPO)</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Implement and maintain access control measures across Google Workspace</li>
                <li>Enforce MFA and monitor login activities</li>
                <li>Conduct annual access reviews and report to management</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">4.2 Human Resources (HR)</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Maintain records of staff access rights and policy acknowledgements</li>
                <li>Coordinate with IT Manager to grant or revoke user access during onboarding and offboarding</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">4.3 Managers and Fractional Contractors</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Use only approved accounts and systems</li>
                <li>Protect login credentials and report suspicious access immediately</li>
                <li>Refrain from sharing accounts or passwords</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* 5. Logical Access Control */}
        <Card className="p-6 mb-8 animate-fade-in" id="logical">
          <h2 className="text-2xl font-bold mb-6">5. Logical Access Control</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">5.1 Account Creation and Assignment</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Each user may be assigned a unique Google Workspace account</li>
                <li>Access levels are granted based on job role:
                  <ul className="list-circle list-inside ml-6 mt-2 space-y-1">
                    <li>IT Admin / Manager: Full administrative privileges for configuration and security review</li>
                    <li>Fractional Contractor: Limited access to specific folders or project files as required</li>
                    <li>General Staff: Access limited to their department's resources</li>
                  </ul>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">5.2 Authentication and Login Controls</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Multi-Factor Authentication (MFA) is mandatory for all Google Workspace accounts</li>
                <li>Passwords must meet Google Workspace security standards and be updated regularly</li>
                <li>Login alerts for suspicious activity are monitored by the IT Manager</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">5.3 Access Modification and Termination</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>HR must notify IT Manager within 1 working day when staff resign, transfer, or change role</li>
                <li>Access rights are adjusted or revoked immediately</li>
                <li>Accounts unused for more than 90 days will be disabled pending review</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">5.4 Access Review</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>The IT Manager conducts a full access rights review annually</li>
                <li>Review results and corrective actions are documented and reported to management</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* 6. Physical Access Control */}
        <Card className="p-6 mb-8 animate-fade-in" id="physical">
          <h2 className="text-2xl font-bold mb-6">6. Physical Access Control</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">6.1 Office and Room Access</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Access to the main office and classrooms is key-controlled</li>
                <li>Keys are issued by HR and recorded in the key register</li>
                <li>Lost or stolen keys must be reported immediately to HR for re-issuance and possible lock replacement</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">6.2 Visitor Management</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Visitors are allowed only when accompanied by staff</li>
                <li>No visitor should have unsupervised access to rooms containing equipment or data</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* 7. Policy Enforcement */}
        <Card className="p-6 mb-8 animate-fade-in" id="enforcement">
          <h2 className="text-2xl font-bold mb-4">7. Policy Enforcement</h2>
          <p className="text-muted-foreground leading-relaxed">
            Failure to comply with this policy may result in disciplinary action, revocation of system access, 
            or termination of contract.
          </p>
        </Card>

        {/* 8. Review and Maintenance */}
        <Card className="p-6 mb-8 animate-fade-in" id="review">
          <h2 className="text-2xl font-bold mb-4">8. Review and Maintenance</h2>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
            <li>This policy will be reviewed annually by the DPO/IT Manager and HR Manager</li>
            <li>Any significant operational or system change may trigger an earlier review</li>
            <li>Updated versions will be circulated to all staff for acknowledgement</li>
          </ul>
        </Card>

        {/* Contact Information */}
        
      </div>
    </div>;
};
export default AccessControl;