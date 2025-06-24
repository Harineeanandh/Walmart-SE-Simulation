📌 Walmart Advanced Software Engineering Simulation – Case Study

🧠 Overview

As part of Walmart’s Advanced Software Engineering virtual job simulation hosted on Forage, I took on the role of a full-stack engineer working across multiple departments — shipping, data infrastructure, and retail operations. This simulation challenged me to solve complex, multi-layered problems using real-world skills in data structures, architecture, database design, and data engineering.
🧪 Task 1: Advanced Data Structures – Power-of-Two Max Heap

The shipping department was implementing a new queuing system and needed a high-performance priority queue. I was tasked with building a custom data structure in Java — a Power-of-Two Max Heap, where each parent node had 2^k children (with k passed as a constructor parameter).

I implemented:

    A generalized heap structure that satisfied the heap property

    Dynamic branching logic based on the configurable powerExponent

    Optimized insert() and popMax() methods for time efficiency

    Robust testing for edge cases with both small and large values of k

💡 Takeaway: This task deepened my algorithmic thinking and challenged me to balance correctness with performance — just like real-world production systems.
🧱 Task 2: Software Architecture – Dynamic Data Processor Design

I designed a UML class diagram for a dynamically configurable data processor used by Walmart’s internal pipeline systems. The system supported:

    Three operating modes: dump, passthrough, and validate

    Three interchangeable databases: PostgreSQL, Redis, and Elasticsearch

    Run-time reconfiguration of processing mode and database backend

My architecture emphasized:

    SOLID principles (especially Open/Closed and Dependency Inversion)

    Clean abstractions using interfaces and strategy patterns

    Flexibility to add new databases or modes in the future

💡 Takeaway: This exercise honed my understanding of extensible software design and how to build for change — not just the current requirements.
🗃️ Task 3: Relational Database Design – Unified Pet Product System

I created a fully normalized Entity-Relationship Diagram (ERD) for Walmart’s pet department to consolidate three product categories (pet food, toys, apparel) under a single schema. My design accounted for:

    Varying attributes across product types using specialization

    Many-to-many relationships between products and animals

    Tracking customer info, transactions, product purchases

    Shipment modeling with product-level quantities between Walmart locations

💡 Takeaway: This task sharpened my ability to abstract real-world entities into clean, queryable database models — with both data integrity and scalability in mind.
🐍 Task 4: Data Munging – Cross-Sheet Shipping Data Aggregation

In the final task, I wrote a Python script to:

    Read messy data from three different spreadsheet schemas

    Merge and transform the data into a unified format

    Extract relevant fields and populate a SQLite database

    Handle multi-step joins across sheets (e.g., shipment origins and destinations)

The script included logic to calculate quantities per shipment, combine product and location data, and ensure consistent schema insertion. This task simulated real data wrangling done before analytics and reporting.

💡 Takeaway: I learned to reason about incomplete and scattered data sources, write robust ETL logic, and apply real-world munging patterns in Python.
⚙️ Tools & Technologies Used

    Java (custom heap implementation)

    UML Tools (class diagrams, ERDs)

    SQLite, Relational Schema Design

    Python (data munging, file I/O, database population)

    Design Patterns: Strategy, Factory, Open/Closed Principle

🧾 What I Learned

This simulation gave me the opportunity to step into multiple engineering contexts — from backend performance optimization to architectural modeling and data migration.

I learned how to:

    Implement custom data structures tailored to system constraints

    Architect codebases for configurability and future extensibility

    Normalize complex real-world data models

    Write efficient ETL pipelines in Python for messy data

✅ Summary

The Walmart simulation was intense, multidisciplinary, and rewarding. It reinforced my passion for solving large-scale, data-driven problems and designing systems that work cleanly across teams and use cases. It gave me a deeper appreciation for how engineering supports operations at scale — and validated that I thrive in these environments.
