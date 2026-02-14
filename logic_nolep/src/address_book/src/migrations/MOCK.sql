-- show all contact
SELECT
  c.contact_id,
  c.name,
  c.email,
  c.phone,
  c.company,
  COALESCE(
    array_agg(g.group_name) FILTER (WHERE g.group_name IS NOT NULL),
    '{}'
  ) AS groups
FROM contacts c
LEFT JOIN contact_groups cg ON c.contact_id = cg.contact_id
LEFT JOIN groups g ON cg.group_id = g.group_id
GROUP BY c.contact_id
ORDER BY c.contact_id;

-- show groups
SELECT
  g.group_id,
  g.group_name,
  COALESCE(
    json_agg(
      json_build_object(
        'name', c.name,
        'phone', c.phone
      )
    ) FILTER (WHERE c.name IS NOT NULL),
    '[]'
  ) AS contacts
FROM groups g
LEFT JOIN contact_groups cg ON g.group_id = cg.group_id
LEFT JOIN contacts c ON cg.contact_id = c.contact_id
GROUP BY g.group_id
ORDER BY g.group_id;